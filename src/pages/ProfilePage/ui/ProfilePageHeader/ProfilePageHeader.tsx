import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames("", {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                {t("Отменить")}
              </Button>
              <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
