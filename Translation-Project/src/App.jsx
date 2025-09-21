import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>Sorry, your browser does not support speech recognition.</span>
    );
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="absolute top-4 right-4">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
          className="p-2 border rounded"
        >
          <option value="bn">বাংলা</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{t("title")}</h2>
        <p className="text-gray-600 mt-2">{t("subtitle")}</p>
      </div>
      <div style={{ padding: "2rem" }}>
        <h1>🎤 Voice Search Test</h1>

        <p>
          <strong>Mic status:</strong>{" "}
          {listening ? "🎙️ Listening..." : "🛑 Not listening"}
        </p>

        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start Listening
        </button>

        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>

        <button onClick={resetTranscript}>Reset</button>

        <p>
          <strong>Transcript:</strong> {transcript}
        </p>
      </div>
    </>
  );
}

export default App;
