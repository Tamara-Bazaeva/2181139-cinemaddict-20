const UpdateType = {
  FILMS_LOADED: 'FILMS_LOADED',
  COMMENTS_LOADED: 'COMMENTS_LOADED',
  COMMENT_SUBMITTED: 'COMMENT_SUBMITTED',
  COMMENT_DELETED: 'COMMENT_DELETED',
  FAVORITE: 'FAVORITE',
  HISTORY: 'HISTORY',
  WATCHLIST: 'WATCHLIST'
};

const Mode = {
  GALLERY: 'GALLERY',
  POPUP: 'POPUP'
};

const FilterType = {
  ALL: 'ALL',
  WATCHLIST: 'WATCHLIST',
  HISTORY: 'HISTORY',
  FAVORITE: 'FAVORITE'
};

const SortType = {
  DEFAULT: 'DEFAULT',
  DATE: 'DATE',
  RATING: 'RATING'
};

const UserAction = {
  UPDATE_FILM: 'UPDATE_FILM',
  UPDATE_COMMENT: 'UPDATE_COMMENT'
};


export { UpdateType, Mode, FilterType, SortType, UserAction };
