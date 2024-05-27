import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import axios from 'axios';

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "302f5e0555979d792db52a8d4b20486c";
const HASH = "5835977270854992330ec8251cc903c038811e8c";

export const Main = () => {

    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");
    const fetchCharacters = async (url) => {
        try {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        } catch (error) {
            console.error("Erro ao buscar dados", error);
        }
    };
    useEffect(() => {
        const ts = Date.now()
        const initialUrl = `${BASE_URL}?ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
        fetchCharacters(initialUrl);
    }, []);
    const searchMarvel = (e) => {
        if (e.key === "Enter") {
            const ts = Date.now()
            const searchUrl = `${BASE_URL}?nameStartsWith=${search}&ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
            fetchCharacters(searchUrl);
        }
    };
    return (
        <>
            <div className="header">
                <div className='bg'>
                    <img src="./images/bg.gif" alt="" />
                </div>
                <br></br>
                <div className='search-bar'>
                    <img src="./images/logo.png" alt="logo" />
                    <p></p>
                    <input
                        type="search"
                        placeholder="Buscar personagem"
                        className='search'
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={searchMarvel}
                    ></input>
                </div>
            </div>
            <div className='container'>
                {!item.length ? <p>Não Encontrado</p> : <Card data={item} />}
            </div>
        </>
    );
}