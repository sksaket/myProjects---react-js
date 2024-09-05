import { useCallback } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useCallback('hex')
    const [color, setColor] = useCallback("#000000")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
            
        }
        setColor(hexColor)
        
        


    }
   
    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb${r},${g},${b}`)
    }



  return (
    <div style={{
        width: '100vh',
        height: '100vh',
        background: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rbg')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex'? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random</button>
    </div>
  );
}
