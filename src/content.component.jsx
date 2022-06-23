import {useState,useEffect} from 'react';
import { getContentData } from "./content.data.js";

  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      setContent(await getContentData());
    })();
  }, []);
