import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "302f5e0555979d792db52a8d4b20486c";
const HASH = "5835977270854992330ec8251cc903c038811e8c";

