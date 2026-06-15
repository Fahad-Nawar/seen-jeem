import React, { useState } from 'react';
import './App.css';
import { CATEGORIES, QUESTIONS_DATA, POINT_LEVELS, BOARD_ROWS } from './data/categories';
import { generateMovieQuestions } from './services/moviesService';

// Import Components
import HomeScreen from './screens/HomeScreen';
import SetupScreen from './screens/SetupScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import GameBoard from './screens/GameBoard';
import QuestionScreen from './screens/QuestionScreen';
import ResultsScreen from './screens/ResultsScreen';
import HistoryScreen from './screens/HistoryScreen';
import AdminPanel from './screens/AdminPanel';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [dynamicQuestions, setDynamicQuestions] = useState({});
  const [gameState, setGameState] = useState({
    username: '',
    team1: { name: 'الفريق الأول', score: 0 },
    team2: { name: 'الفريق الثاني', score: 0 },
    currentTeam: 1,
    selectedCategories: [],
    gameHistory: [],
    usedQuestions: {}, // { categoryId_points: true }
    currentQuestion: null, // { categoryId, points, questionData }
    selectedOption: null,
    helpersUsed: {
      team1: { callFriend: false, answerTwo: false, trap: false },
      team2: { callFriend: false, answerTwo: false, trap: false }
    }
  });

  const handleStartGame = (team1Name, team2Name, username) => {
    setGameState(prev => ({
      ...prev,
      username,
      team1: { ...prev.team1, name: team1Name, score: 0 },
      team2: { ...prev.team2, name: team2Name, score: 0 }
    }));
    setCurrentScreen('categories');
  };

  const handleSelectCategories = async (categoryIds) => {
    // Load dynamic categories (like movies from TMDB)
    const dynamicCats = CATEGORIES.filter(c =>
      c.dynamic && categoryIds.includes(c.id)
    );

    const newDynamicQuestions = { ...dynamicQuestions };
    for (const cat of dynamicCats) {
      if (cat.id === 'movie_posters' && !newDynamicQuestions[cat.id]) {
        const questions = await generateMovieQuestions();
        if (questions) {
          newDynamicQuestions[cat.id] = questions;
        }
      }
    }
    setDynamicQuestions(newDynamicQuestions);

    setGameState(prev => ({
      ...prev,
      selectedCategories: categoryIds,
      currentTeam: 1,
      usedQuestions: {},
      currentQuestion: null,
      selectedOption: null,
      helpersUsed: {
        team1: { callFriend: false, answerTwo: false, trap: false },
        team2: { callFriend: false, answerTwo: false, trap: false }
      }
    }));
    setCurrentScreen('board');
  };

  const handleSelectQuestion = (categoryId, points, questionIndex) => {
    // Check dynamic questions first (e.g., movies from TMDB)
    const dynamicData = dynamicQuestions[categoryId]?.[points] || [];
    const staticData = QUESTIONS_DATA[categoryId]?.[points] || [];
    const questions = dynamicData.length > 0 ? dynamicData : staticData;

    if (questions.length === 0) return;

    // Use questionIndex to grab the specific question
    const questionData = questions[questionIndex] || questions[0];

    setGameState(prev => ({
      ...prev,
      currentQuestion: {
        categoryId,
        points,
        questionIndex,
        ...questionData
      },
      selectedOption: null
    }));
    setCurrentScreen('question');
  };

  const handleAnswerQuestion = (optionIndex, scoreToOtherTeam = false) => {
    const isCorrect = optionIndex === gameState.currentQuestion.correct;
    const points = isCorrect ? gameState.currentQuestion.points : 0;

    setGameState(prev => {
      // If scoreToOtherTeam is true, second team scored (during their 15-sec chance)
      const teamKey = scoreToOtherTeam
        ? (prev.currentTeam === 1 ? 'team2' : 'team1')
        : (prev.currentTeam === 1 ? 'team1' : 'team2');
      return {
        ...prev,
        [teamKey]: {
          ...prev[teamKey],
          score: prev[teamKey].score + points
        },
        selectedOption: optionIndex
      };
    });
  };

  const handleNextTurn = () => {
    const questionKey = `${gameState.currentQuestion.categoryId}_${gameState.currentQuestion.points}_${gameState.currentQuestion.questionIndex}`;
    const newUsedQuestions = { ...gameState.usedQuestions, [questionKey]: true };

    // Check if all questions used (6 categories × 6 questions = 36 questions)
    const totalQuestions = gameState.selectedCategories.length * 6;
    const usedCount = Object.keys(newUsedQuestions).length;

    if (usedCount >= totalQuestions) {
      // Game over
      saveGameToHistory();
      setGameState(prev => ({
        ...prev,
        usedQuestions: newUsedQuestions,
        currentQuestion: null,
        selectedOption: null
      }));
      setCurrentScreen('results');
    } else {
      // Next team's turn
      setGameState(prev => ({
        ...prev,
        usedQuestions: newUsedQuestions,
        currentTeam: prev.currentTeam === 1 ? 2 : 1,
        currentQuestion: null,
        selectedOption: null
      }));
      setCurrentScreen('board');
    }
  };

  const handleUseHelper = (helperType) => {
    setGameState(prev => {
      const teamKey = prev.currentTeam === 1 ? 'team1' : 'team2';
      return {
        ...prev,
        helpersUsed: {
          ...prev.helpersUsed,
          [teamKey]: {
            ...prev.helpersUsed[teamKey],
            [helperType]: true
          }
        }
      };
    });
  };

  const saveGameToHistory = () => {
    setGameState(prev => ({
      ...prev,
      gameHistory: [
        ...prev.gameHistory,
        {
          team1: prev.team1.name,
          team2: prev.team2.name,
          score1: prev.team1.score,
          score2: prev.team2.score,
          date: new Date().toLocaleString('ar-SA')
        }
      ]
    }));
  };

  const handleResetGame = () => {
    setGameState(prev => ({
      ...prev,
      team1: { ...prev.team1, score: 0 },
      team2: { ...prev.team2, score: 0 },
      currentTeam: 1,
      selectedCategories: [],
      usedQuestions: {},
      currentQuestion: null,
      selectedOption: null,
      helpersUsed: {
        team1: { callFriend: false, answerTwo: false, trap: false },
        team2: { callFriend: false, answerTwo: false, trap: false }
      }
    }));
    setCurrentScreen('home');
  };

  const handleViewHistory = () => {
    setCurrentScreen('history');
  };

  const handleAdjustScore = (teamNumber, delta) => {
    setGameState(prev => {
      const teamKey = teamNumber === 1 ? 'team1' : 'team2';
      return {
        ...prev,
        [teamKey]: {
          ...prev[teamKey],
          score: Math.max(0, prev[teamKey].score + delta),
        },
      };
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onStart={() => setCurrentScreen('setup')} onAdmin={() => setCurrentScreen('admin')} />;
      case 'setup':
        return (
          <SetupScreen
            onStart={handleStartGame}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'categories':
        return (
          <CategoriesScreen
            onSelectCategories={handleSelectCategories}
            onBack={() => setCurrentScreen('setup')}
          />
        );
      case 'board':
        return (
          <GameBoard
            gameState={gameState}
            categories={CATEGORIES.filter(c => gameState.selectedCategories.includes(c.id))}
            usedQuestions={gameState.usedQuestions}
            onSelectQuestion={handleSelectQuestion}
            onStop={() => setCurrentScreen('home')}
            onAdjustScore={handleAdjustScore}
          />
        );
      case 'question':
        return (
          <QuestionScreen
            gameState={gameState}
            onAnswerQuestion={handleAnswerQuestion}
            onNextTurn={handleNextTurn}
            onUseHelper={handleUseHelper}
            onExit={() => setCurrentScreen('board')}
          />
        );
      case 'results':
        return (
          <ResultsScreen
            gameState={gameState}
            onHome={handleResetGame}
            onHistory={handleViewHistory}
          />
        );
      case 'history':
        return (
          <HistoryScreen
            gameHistory={gameState.gameHistory}
            onHome={handleResetGame}
          />
        );
      case 'admin':
        return (
          <AdminPanel
            onBack={() => setCurrentScreen('home')}
          />
        );
      default:
        return <HomeScreen onStart={() => setCurrentScreen('setup')} onAdmin={() => setCurrentScreen('admin')} />;
    }
  };

  return (
    <div className="app">
      {renderScreen()}
    </div>
  );
}
