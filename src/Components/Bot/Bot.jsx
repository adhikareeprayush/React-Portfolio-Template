import './Bot.css'
import botImg from '../../assets/bot.svg'
import { useState } from 'react'
// import { GoogleGenerativeAI } from '@google/generative-ai';
// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const prompt = "Write a story about a magic backpack.";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


const Bot = () => {

    const [isBotOpen, setIsBotOpen] = useState(false);

    return (
        <div>
            {isBotOpen ?
                <div className='bot-icon'>
                    <img onClick={() => isBotOpen ? setIsBotOpen(false) : setIsBotOpen(true)} src={botImg} alt="bot" />
                </div>
                :
                <div className='bot-message-container'>
                </div>
            }
        </div>

    )
}

export default Bot
