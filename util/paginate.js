const paginate = (query, page, pageSize) => {
  const skipCount = (page - 1) * pageSize;
  if (skipCount < 0) skipCount = 0;
  return query.skip(skipCount).limit(pageSize);
};

module.exports = paginate;
