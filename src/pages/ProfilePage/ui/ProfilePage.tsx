import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoadingr,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
// import cls from "./ProfilePage.module.scss";

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoadingr);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
