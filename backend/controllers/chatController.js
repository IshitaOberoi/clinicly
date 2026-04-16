import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are a friendly health assistant for a doctor appointment booking platform. 
You help users identify which type of doctor they need based on their symptoms.

Our platform has these specialists available:
- Dermatologist (skin, hair, nail problems)
- Gynecologist (women's health, reproductive issues)
- General Physician (fever, cold, cough, general illness)
- Pediatrician (children's health, below 18)
- Neurologist (headaches, seizures, nerve issues, dizziness)
- Gastroenterologist (stomach, digestion, liver issues)

Your behavior:
- Respond in a warm, conversational tone like a helpful friend
- Ask a follow-up question if symptoms are unclear
- Recommend the most relevant specialist from our list above
- End every response with something like: "You can book an appointment with a [specialist] directly from our platform!"
- NEVER give a definitive diagnosis
- Keep responses to 3-4 sentences max
- If emergency symptoms (chest pain, difficulty breathing, stroke), say call emergency services immediately`;


export const chat = async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
    });

    res.json({ success: true, reply: response.choices[0].message.content });

  } catch (error) {
    console.error("Chat error:", error.message);
    res.status(500).json({ success: false, message: "Chat service failed" });
  }
};