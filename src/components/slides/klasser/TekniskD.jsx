import { useState, useEffect, useMemo } from "react";
import { klasserNavn, teachersNavn } from "../slides__components/NavnCodes";



const getClassNameFactory = (map) => {
  // Prefer longest codes first (avoid 146 matching when code is 1465)
  const entriesByLen = Object.entries(map).sort(
    (a, b) => b[0].length - a[0].length
  );
  const normalizedMap = Object.fromEntries(
    entriesByLen.map(([k, v]) => [String(parseInt(k, 10)), v])
  );

  return (value) => {
    const str = String(value);

    // 1) exact match
    if (map[str]) return map[str];

    // 2) substring match (e.g. "1525-MG")
    const sub = entriesByLen.find(([code]) => str.includes(code));
    if (sub) return sub[1];

    // 3) numeric-normalized match (handles leading zeros like "00329")
    const digits = (str.match(/\d+/g) || []).join("");
    if (digits) {
      const norm = String(parseInt(digits, 10));
      if (normalizedMap[norm]) return normalizedMap[norm];
    }

    // fallback: show original
    return str;
  };
};



export default function TekniskD() {

   const [slides, setSlides] = useState();
   
     useEffect(() => {
       fetch("/data/sampledata.json")
         .then((res) => res.json())
         .then((data) => setSlides(data))
         .catch((err) => console.error("Error fetching data:", err));
     }, []);

       const getClassName = useMemo(() => getClassNameFactory(klasserNavn), []);
       console.log(getClassName);

     return (
       <>
         <h1 className="slide__title text-5xl text-center mb-8">Teknisk Design</h1>
   
         <table className="pt-15 w-full text-left klasse__table">
           <thead>
             <tr>
               <th>Klasse</th>
               <th>Underviser</th>
               <th>Lokale</th>
             </tr>
           </thead>
           <tbody>
               {slides
                ?.filter(k => k.class.includes("1890") && !k.class.includes('on')).map((klasse, i) => ( 
                    <tr key={i}>
                        <td>
                            {klasse.class.startsWith('0') ? (
                              <>
                                {getClassName(klasse.class)} <span className="level">- Grundforløb 2 </span>
                              </>
                            ) : klasse.class.startsWith('1') ? (
                              <>
                                {getClassName(klasse.class)} <span className="level">- Hovedforløb</span>
                              </>
                            ) : (
                              getClassName(klasse.class)
                            )}
                          </td>
                        <td>
                            {klasse.teacher
                            .split(", ")
                            .map(code => code.trim())
                            .map(code => teachersNavn[code] || code)
                            .join(", ")}
                        </td>
                        <td>{klasse.classroom || "-"}</td>
                  </tr>
                ))}
           </tbody>
         </table>
       </>
     );
}