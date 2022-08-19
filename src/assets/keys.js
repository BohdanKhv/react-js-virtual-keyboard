// Array of all keys on the keyboard

// Rows
// 'esc', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
// '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
// 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
// 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
// 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'ArrowUp',
// 'Control', 'cmd', 'Alt', 'Space', 'Alt', 'cmd', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight',

const keys = [
    
    {
        keyCode: 'Escape',
        keyName: 'Esc'
    },
    {
        keyCode: 'f1',
        keyName: 'f1'
    },
    {
        keyCode: 'f2',
        keyName: 'f2'
    },
    {
        keyCode: 'f3',
        keyName: 'f3'
    },
    {
        keyCode: 'f4',
        keyName: 'f4'
    },
    {
        keyCode: 'f5',
        keyName: 'f5'
    },
    {
        keyCode: 'f6',
        keyName: 'f6'
    },
    {
        keyCode: 'f7',
        keyName: 'f7'
    },
    {
        keyCode: 'f8',
        keyName: 'f8'
    },
    {
        keyCode: 'f9',
        keyName: 'f9'
    },
    {
        keyCode: 'f10',
        keyName: 'f10'
    },
    {
        keyCode: 'f11',
        keyName: 'f11'
    },
    {
        keyCode: 'f12',
        keyName: 'f12',
    },
    {
        keyCode: '`',
        keyName: '`'
    },
    {
        keyCode: '1',
        keyName: '1'
    },
    {
        keyCode: '2',
        keyName: '2'
    },
    {
        keyCode: '3',
        keyName: '3'
    },
    {
        keyCode: '4',
        keyName: '4'
    },
    {
        keyCode: '5',
        keyName: '5'
    },
    {
        keyCode: '6',
        keyName: '6'
    },
    {
        keyCode: '7',
        keyName: '7'
    },
    {
        keyCode: '8',
        keyName: '8'
    },
    {
        keyCode: '9',
        keyName: '9'
    },
    {
        keyCode: '0',
        keyName: '0'
    },
    {
        keyCode: '-',
        keyName: '-'
    },
    {
        keyCode: '=',
        keyName: '='
    },
    {
        keyCode: 'Backspace',
        keyName: '⇚',
    },
    {
        keyCode: 'Tab',
        keyName: 'Tab'
    },
    {
        keyCode: 'q',
        keyName: 'q'
    },
    {
        keyCode: 'w',
        keyName: 'w'
    },
    {
        keyCode: 'e',
        keyName: 'e'
    },
    {
        keyCode: 'r',
        keyName: 'r'
    },
    {
        keyCode: 't',
        keyName: 't'
    },
    {
        keyCode: 'y',
        keyName: 'y'
    },
    {
        keyCode: 'u',
        keyName: 'u'
    },
    {
        keyCode: 'i',
        keyName: 'i'
    },
    {
        keyCode: 'o',
        keyName: 'o'
    },
    {
        keyCode: 'p',
        keyName: 'p'
    },
    {
        keyCode: '[',
        keyName: '['
    },
    {
        keyCode: ']',
        keyName: ']'
    },
    {
        keyCode: '\\',
        keyName: '\\'
    },
    {
        keyCode: 'Delete',
        keyName: 'Delete',
    },
    {
        keyCode: 'CapsLock',
        keyName: 'Caps Lock'
    },
    {
        keyCode: 'a',
        keyName: 'a'
    },
    {
        keyCode: 's',
        keyName: 's'
    },
    {
        keyCode: 'd',
        keyName: 'd'
    },
    {
        keyCode: 'f',
        keyName: 'f'
    },
    {
        keyCode: 'g',
        keyName: 'g'
    },
    {
        keyCode: 'h',
        keyName: 'h'
    },
    {
        keyCode: 'j',
        keyName: 'j'
    },
    {
        keyCode: 'k',
        keyName: 'k'
    },
    {
        keyCode: 'l',
        keyName: 'l'
    },
    {
        keyCode: ';',
        keyName: ';'
    },
    {
        keyCode: '\'',
        keyName: '\''
    },
    {
        keyCode: 'Enter',
        keyName: 'Enter',
    },
    {
        keyCode: 'Shift',
        keyName: '⇧'
    },
    {
        keyCode: 'z',
        keyName: 'z'
    },
    {
        keyCode: 'x',
        keyName: 'x'
    },
    {
        keyCode: 'c',
        keyName: 'c'
    },
    {
        keyCode: 'v',
        keyName: 'v'
    },
    {
        keyCode: 'b',
        keyName: 'b'
    },
    {
        keyCode: 'n',
        keyName: 'n'
    },
    {
        keyCode: 'm',
        keyName: 'm'
    },
    {
        keyCode: ',',
        keyName: ','
    },
    {
        keyCode: '.',
        keyName: '.'
    },
    {
        keyCode: '/',
        keyName: '/'
    },
    {
        keyCode: 'ArrowUp',
        keyName: '↑',
    },
    {
        keyCode: 'Control',
        keyName: 'Ctrl'
    },
    {
        keyCode: 'Alt',
        keyName: 'Alt'
    },
    {
        keyCode: ' ',
        keyName: '—'
    },
    {
        keyCode: 'Meta',
        keyName: 'Win'
    },
    {
        keyCode: 'ContextMenu',
        keyName: '⊞'
    },
    {
        keyCode: 'ArrowLeft',
        keyName: '←',
    },
    {
        keyCode: 'ArrowDown',
        keyName: '↓',
    },
    {
        keyCode: 'ArrowRight',
        keyName: '→',
    },
    ];

export default keys;