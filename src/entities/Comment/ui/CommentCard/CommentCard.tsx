import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { VStack } from "shared/ui/Stack";
import { RouterPath } from "shared/config/routerConfig/routeConfig";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={100} height={16} className={cls.username} />
          </div>
          <Skeleton width="100%" height={50} className={cls.text} />
        </div>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
        <AppLink
          to={`${RouterPath.profile}${comment.user.id}`}
          className={cls.header}
        >
          {comment.user.avatar && (
            <Avatar size={30} src={comment.user.avatar} />
          )}
          <Text className={cls.username} title={comment.user.username} />
        </AppLink>
        <Text className={cls.text} text={comment.text} />
      </VStack>
    );
  }
);
