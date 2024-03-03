export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

/**
 * Добавляет указанные параметры запроса к URL и обновляет историю браузера.
 *
 * @param {OptionalRecord<string, string>} params - Параметры запроса, которые будут добавлены к URL.
 * @return {void}
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, "", getQueryParams(params));
}
