
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

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
    </>
  );
}

export default App
