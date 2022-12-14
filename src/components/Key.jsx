import './styles/Key.css';

const keySet1 = ['Escape'];
const keySet2 = ['Backspace', 'Tab', 'Delete'];
const keySet3 = ['Enter', 'CapsLock'];
const keySet4 = ['Shift'];
const keySet5 = ['Alt', 'Control', 'Meta', 'ContextMenu'];
const keySet6 = [' '];

const Key = ({ keyItem }) => {

    const onClick = (keyCode) => {
        const textarea = document.querySelector('textarea');

        textarea.value += keyCode;
    }

    const deleteOne = () => {
        const textarea = document.querySelector('textarea');

        textarea.value = textarea.value.slice(0, -1);
    }

    const deleteAll = () => {
        const textarea = document.querySelector('textarea');

        textarea.value = '';
    }

    return (
        <div
            onClick={() => {
                if(keyItem.keyCode === 'Delete' || keyItem.keyCode === 'Backspace') {
                    deleteOne();
                } else if(keyItem.keyCode === 'Escape' || keyItem.keyCode === 'Enter') { 
                    deleteAll();
                } else {
                    onClick(keyItem.keyCode)
                }
            } }
            className={`key-code${
                keySet1.includes(keyItem.keyCode) ? 
                ' key-set-1' 
                : keySet2.includes(keyItem.keyCode) ? 
                ' key-set-2' 
                : keySet3.includes(keyItem.keyCode) ? 
                ' key-set-3' 
                : keySet4.includes(keyItem.keyCode) ? 
                ' key-set-4' 
                : keySet5.includes(keyItem.keyCode) ? 
                ' key-set-5' 
                : keySet6.includes(keyItem.keyCode) ? 
                ' key-set-6' 
                : ''}`}
            data-key-code={keyItem.keyCode.toLowerCase()}
        >
            {keyItem.keyName}
        </div>
    )
}

export default Key