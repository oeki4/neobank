import { useRef, useState } from "react";

interface PinInputProps {
  length?: number;
  onChange?: (value: string) => void;
}

export const PinInput = ({ length = 4, onChange }: PinInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    onChange?.(newValues.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-4">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="relative w-12 h-12">
          {!values[i] && focusedIndex !== i && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-5 h-5 rounded-full border-[2px] border-[#808080]" />
            </div>
          )}

          <input
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-full h-full text-center font-ubuntu font-medium text-[20px] border rounded-lg border-[#808080] focus:border-[#3182CE] focus:outline-0 focus:ring-1 focus:ring-[#3182CE] bg-white"
            ref={(el) => (inputsRef.current[i] = el)}
            value={values[i]}
            onFocus={() => setFocusedIndex(i)}
            onBlur={() => setFocusedIndex(null)}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
          />
        </div>
      ))}
    </div>
  );
};
