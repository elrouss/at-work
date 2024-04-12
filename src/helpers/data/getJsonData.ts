export const getJsonData = async (name: string) => {
  try {
    const file = await fetch(`assets/data/${name}.json`);
    if (!file) throw new Error();

    return await file.json();
  } catch (e) {
    console.error(e);
  }
};
