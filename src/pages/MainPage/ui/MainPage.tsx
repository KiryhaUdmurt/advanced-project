import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <BugButton />
      {t("Главная")}
    </Page>
  );
};

export default MainPage;
