// import axios from "axios";
// import { useEffect, useState } from "react";

// export const Quotes = () => {
//   const [quote, setQuote] = useState("");

//   const getQuote = async () => {
//     try {
//       let response = await axios.get(
//         "https://zenquotes.io/api/today/"
//       );
//       const quoteData = response.data;
//       console.log(quoteData)
//       setQuote(quoteData.q);

//       // Store the quote and the date in local storage
//       localStorage.setItem("quote", quoteData.q);
//       localStorage.setItem("quoteDate", new Date().toLocaleDateString());
//     } catch (err) {
//       console.log(err);
//       alert("something went wrong");
//     }
//   };

//   useEffect(() => {
//     // Check if a quote was fetched today
//     const storedDate = localStorage.getItem("quoteDate");
//     const today = new Date().toLocaleDateString();

//     if (storedDate === today) {
//       // If the quote was fetched today, use the stored quote
//       const storedQuote = localStorage.getItem("quote");
//       setQuote(storedQuote);
//     } else {
//       // Otherwise, fetch a new quote
//       getQuote();
//     }
//   }, []);

//   return <>{<p>{quote}</p>}</>;
// };
