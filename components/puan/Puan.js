"use client";
import React, { useEffect, useState } from "react";
import "./puan.scss";
import axios from "axios";

function Puan() {
  const [teams, setTeams] = useState([]);

  const fetchPoints = async () => {
    const res = await axios.get("https://payment.onlinekesif.com/puan-durumu");
    const teamsList = res.data.result;
    setTeams(teamsList);
  };

  useEffect(() => {
    console.log("jeek");
    fetchPoints();
  }, []);

  console.log(teams);
  return (
    <div className="points-wrapper">
        <div className="small-wrapper">
          <table class="content-table">
            <thead>
              <tr>
                <th className="cat">S</th>
                <th>TAKIM</th>
                <th className="cat">O</th>
                <th className="cat">G</th>
                <th className="cat">B</th>
                <th className="cat">M</th>
                <th className="cat">A</th>
                <th className="cat">P</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => {
                return (
                  <tr key={index} className="tr">
                    <td>{index + 1}</td>
                    <td>{team.name}</td>
                    <td>{team.played}</td>
                    <td>{team.wins}</td>
                    <td>{team.draws}</td>
                    <td>{team.losses}</td>
                    <td>{team.average}</td>
                    <td>{team.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="div"></div>
      </div>
  );
}

export default Puan;
