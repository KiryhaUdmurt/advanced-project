import { ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsShema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
