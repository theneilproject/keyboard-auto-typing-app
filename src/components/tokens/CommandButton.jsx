import { Copy } from "lucide-react";
import {useEffect, useState} from "react";

const CommandButton = ({ onClick, onCopy, command, text, color = "blue", disabled = false}) => {
  const [copied, setCopied] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const placeholderRegex = /\^\{([a-zA-Z0-9]+)}/g;
  const placeholders = Array.from(command.matchAll(placeholderRegex), (match) => match[1]).filter(Boolean);
  const uniquePlaceholders = [...new Set(placeholders)];

  useEffect(() => {
    if (!placeholders || placeholders.length === 0) return
    // console.log('command', command)
    // console.log('placeholders', placeholders)
    // console.log('uniquePlaceholders', uniquePlaceholders)
    const initialValues = {};
    uniquePlaceholders.forEach((placeholder) => {
      initialValues[placeholder] = "";
    });
    setInputValues(initialValues);
  }, [command]);

  const handleInputChange = (key, value) => {
    setInputValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const handleCopy = async () => {
    let finalCommand = command;
    uniquePlaceholders.forEach((key) => {
      const regExp = new RegExp(`\\^\\{${key}\\}`, "g");
      finalCommand = finalCommand.replace(regExp, inputValues[key]);
    })

    await navigator.clipboard.writeText(finalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onCopy?.();
  }

  const buttonColors = {
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "purple",
  }

  return (
    <div className="command-button-container">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`command-button left-button ${buttonColors[color]}`}
      >
        {text}
      </button>
      <div className={`command-input-container ${buttonColors[color]}`}>
        {uniquePlaceholders.length > 0 && (
          <div className="inputs-container">
            {uniquePlaceholders.map((key) => {
              // console.log('key', key);
              return (
                <div key={key} className="input-group">
                  <input
                    type="text"
                    id={`placeholder-${key}`}
                    value={inputValues[key] || ""}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    placeholder={`입력: ${key}`}
                    className="command-input"
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
      <button
        onClick={handleCopy}
        className={`copy-button right-button ${copied ? "copied" : ""}`}
        title={copied ? "복사됨!" : "명령어 복사"}
      >
        <Copy size={16}/>
      </button>
    </div>
  );
};

export default CommandButton;