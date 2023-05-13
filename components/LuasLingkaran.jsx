import { useContext } from "react";
import { useEffect  } from "react";
import { useState } from "react";
import { CounterContext } from "../context/CounterProvider"

export const LuasLingkaran =() => {
    const [jariJari, setJariJari] = useState(0)
    const [hasil, setHasil] = useState(0)
    const { count } = useContext(CounterContext)
    useEffect(() => {
        setHasil(22/7 * jariJari) 
    }, [jariJari])

    return <div>
        Count: { count }<br/>
        Jari jari:
        <input type="number" value={jariJari} onChange={(e) => setJariJari(e.target.value)} /><br/>

        Luas: { hasil}
    </div>
}

export default LuasLingkaran