import { Copy } from "lucide-react";
import {useState} from "react";

const CommandButton = ({ onClick, onCopy, command, text, color = "blue", disabled = false}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onCopy?.();
  }

  const baseButtonClass = "flex items-center gap-2 px-4 py-2 text-white transition-all duration-200";
  const buttonColors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  }

  return (
    <div className="flex">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseButtonClass} ${buttonColors[color]} rounded-l flex-1 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {text}
      </button>
      <button
        onClick={handleCopy}
        className={`${baseButtonClass} ${copied ? 'bg-green-500' : 'bg-gray-500'} rounded-r hover:bg-opacity-90`}
        title={copied ? '복사됨!' : '명령어 복사'}
      >
        <Copy size={16}/>
      </button>
    </div>
  );
};

export default CommandButton;