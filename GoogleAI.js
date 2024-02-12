import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

async function GoogleGenerative(userQuestion) {
  let AI = new GoogleGenerativeAI(process.env.API_KEY);
  let model = AI.getGenerativeModel({ model: "gemini-pro" });

  let prompt = userQuestion;

  let result = await model.generateContent(prompt);
  let response = await result.response;
  let text = response.text();

  return text;
}

export { GoogleGenerative };
