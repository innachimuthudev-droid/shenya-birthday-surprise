import {useState} from"react";import Confetti from"../components/Confetti";const message=`Happy Birthday, Shenya! 🎂🥳✨

Wishing you a very, very happy birthday! 💐❤️ I hope your special day is filled with lots of happiness, laughter, good food, and beautiful moments that you'll remember for a long time. 😊

Even though we have known each other only for a short time, I really enjoyed all the conversations we've had so far. It's actually surprising how quickly we went from simple "hello" messages to talking about studies, hobbies, movies, dramas, family, relationships, and so many random things 😂. I’m really glad I got the chance to know you and have these conversations with you.

I hope this new year of your life brings you closer to all the things you want to achieve. May you get success in your studies and career, meet good people, experience many happy moments, and most importantly, always have reasons to smile. 🌸✨

And whenever life gets stressful or confusing, I hope you have the strength and confidence to handle everything and keep moving forward. You deserve lots of happiness and good things in life. 😊❤️

Enjoy your day to the fullest! Don't let anyone or anything spoil your birthday mood today 😂🎉. Eat something really delicious, have fun, take lots of pictures, and make some good memories! 😄📸

Once again, Happy Birthday, Shenya! 🎂🎊💐
Have an amazing birthday and an even more amazing year ahead! ✨❤️`;export default function FinalMessage({replay}:{replay:()=>void}){const[o,setO]=useState(false);return <section className="card message-card"><div className="emoji">💌</div><h1>A Special Message For You</h1>{o?<><Confetti/><div className="message">{message}</div><button className="secondary" onClick={replay}>Replay ↺</button></>:<><p>You made it all the way to the final surprise. ❤️</p><button onClick={()=>setO(true)}>Open My Message 💖</button></>}</section>}