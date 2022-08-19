import { useEffect } from 'react';
import { Key, TextArea } from '../components';
import './styles/Keyboard.css';
import keys from '../assets/keys';


const Keyboard = () => {

    const handleKeyDown = (e) => {
        if (e.repeat) return;
        console.log(e.key);
        const key = document.querySelector(`[data-key-code="${e.key.toLowerCase()}"]`);
        if(key) key.classList.add('key-active');
    }

    const handleKeyUp = (e) => {
        console.log(e.key);
        const key = document.querySelector(`[data-key-code="${e.key.toLowerCase()}"]`);
        if(key) key.classList.remove('key-active');
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    } , []);

    return (
        <section className="keyboard-wrapper">
            <div style={{width: '100%'}}>
                <TextArea/>
            </div>
            <div className="keyboard">
                <div className="keyboard-row">
                    {keys.slice(0,13).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
                <div className="keyboard-row">
                    {keys.slice(13,27).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
                <div className="keyboard-row">
                    {keys.slice(27,42).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
                <div className="keyboard-row">
                    {keys.slice(42,55).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
                <div className="keyboard-row">
                    {keys.slice(55,67).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
                <div className="keyboard-row">
                    {keys.slice(67).map((keyItem, index) => (
                        <Key key={`${keyItem.keyCode}-${index}`} keyItem={keyItem} />
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Keyboard