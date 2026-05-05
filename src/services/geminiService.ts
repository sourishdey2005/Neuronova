import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: In this environment, GEMINI_API_KEY is provided via process.env.GEMINI_API_KEY 
// which is injected by Vite's define config.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const summarizeResearch = async (abstract: string) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('Intelligence module disconnected. Please check API credentials.');
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the NeuroNova Lab intelligence system. Summarize the following research abstract into 3 concise bullet points for a technical audience. Focus on novelty and impact. 
      
      Abstract:
      ${abstract}`,
    });

    return response.text;
  } catch (error) {
    console.error('AI Processing Error:', error);
    throw error;
  }
};
