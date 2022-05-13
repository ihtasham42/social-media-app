const paginate = (query, page, pageSize) => {
  if (!page) page = 1;
  const skipCount = (page - 1) * pageSize;
  if (skipCount < 0) skipCount = 0;
  return query.skip(skipCount).limit(pageSize);
};

module.exports = paginate;
