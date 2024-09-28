import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "./../../utils/api";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {
  // API isteği atıyoruz
  const res = await api.get("/getLanguages");
  //   gelen cevabı return ediyoruz
  return res.data.data.languages;
});
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (p) => {
    const data = new FormData();
    data.append("source_language", p.sourceLang.value);
    data.append("target_language", p.targetLang.value);
    data.append("text", p.text);
    if (p.text === undefined) return;
    const res = await api.post("/translate", data);
    return res.data.data.translatedText;
  }
);
