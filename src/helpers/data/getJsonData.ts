export const getJsonData = async (name: string) => {
  try {
    // особенности деплоя на GH
    const file = await fetch(`../../../at-work/dist/assets/data/${name}.json`);
    if (!file) throw new Error();

    return await file.json();
  } catch (e) {
    console.error(e);
  }
};
