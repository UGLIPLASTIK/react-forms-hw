import { useState } from "react";


const Converter = () => {
  const [color, setColor] = useState('')
  const [bgc, setBgc] = useState('')

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }

  const convertHex = ({ target }: React.FormEvent<HTMLInputElement>) => {
    const { value } = target as HTMLInputElement;
    const hex = hexToRgb(value)
    if (hex) {
      setColor(hex);
      setBgc(hex);
    } else if (!hex && value.length >= 7) {
      setColor('Ошибка');
      setBgc('#e94b35');
    }
  }

  return (
    <>
      <form style={{backgroundColor: bgc}}>
        <div className="input-group">
          <input onChange={convertHex} className="hex-input" type="text" />
          <input readOnly className="rgb-input" type="text" value={color} />
        </div>
      </form>
    </>
  )
}

export default Converter;