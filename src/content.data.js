export const getContentData = () => {
  return Promise.all(contentDataStories.map((func) => func()));
};
