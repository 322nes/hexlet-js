function data(domain) {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
  } else if (domain.startsWith('www.')) {
    scheme = 'www';
    } else {
    scheme = 'http';
  }

  const name = domain.replace(${scheme}://, '');

  return { scheme, name };
};

console.log(data('https:\\ya.ru'));

// BEGIN

