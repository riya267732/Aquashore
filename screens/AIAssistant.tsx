
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import { Screen, AIMessage } from '../types';

interface AIAssistantProps {
  onNavigate: (screen: Screen) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    { role: 'model', text: "Hello diver! I'm AquaGuide, your AI ocean companion. Need help identifying a fish, planning a dive, or checking gear? Ask away!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: AIMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMsg].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are AquaGuide, an expert scuba diving assistant. You are friendly, safety-conscious, and have deep knowledge of marine biology, dive physics, and top dive destinations worldwide. Keep responses concise and helpful for a diver who might be on a boat or at a resort.",
        }
      });

      const aiText = response.text || "I'm having trouble connecting to the surface. Let's try that again!";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, the signal is weak down here. Could you repeat that?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col bg-background-dark">
      <StatusBar />
      
      <header className="px-6 pt-14 pb-4 border-b border-white/5 bg-background-dark/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-icons-round text-primary animate-pulse">auto_awesome</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">AquaGuide AI</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Always Online</span>
            </div>
          </div>
        </div>
      </header>

      <main 
        ref={scrollRef}
        className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar space-y-6 pb-40"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10' 
                : 'glass text-slate-200 rounded-tl-none border-white/5'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="glass px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-24 left-0 right-0 px-4 z-40">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>
          <div className="relative glass border-white/10 rounded-2xl flex items-center p-2 pr-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about fish, gear, or sites..."
              className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-sm text-white placeholder:text-white/30"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                input.trim() ? 'bg-primary text-white shadow-lg' : 'bg-white/5 text-white/20'
              }`}
            >
              <span className="material-icons-round text-xl">send</span>
            </button>
          </div>
        </div>
      </div>

      <NavBar currentScreen="AI_ASSISTANT" onNavigate={onNavigate} />
    </div>
  );
};

export default AIAssistant;
