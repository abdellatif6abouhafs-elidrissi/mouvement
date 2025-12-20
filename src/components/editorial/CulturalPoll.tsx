'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Vote, Trophy, CheckCircle, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

interface PollOption {
  id: string;
  text: string;
  votes: number;
  image?: string;
}

interface CulturalPollProps {
  poll?: {
    id: string;
    question: string;
    options: PollOption[];
    totalVotes: number;
    endsAt: string;
    previousWinner?: {
      text: string;
      percentage: number;
    };
  };
}

const defaultPoll = {
  id: '1',
  question: 'Best Tifo of 2024?',
  options: [
    { id: '1', text: 'GREEN BOYS 2005 - Derby Display', votes: 4523 },
    { id: '2', text: 'Curva Sud - Champions League Night', votes: 3891 },
    { id: '3', text: 'Yellow Wall - Farewell to a Legend', votes: 3254 },
    { id: '4', text: 'La 12 - Libertadores Final', votes: 2987 },
  ],
  totalVotes: 14655,
  endsAt: 'December 25, 2024',
  previousWinner: {
    text: 'GREEN BOYS 2005 - African Champions',
    percentage: 42,
  },
};

export default function CulturalPoll({ poll = defaultPoll }: CulturalPollProps) {
  const t = useTranslations('editorial');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  const getPercentage = (votes: number) => {
    return Math.round((votes / poll.totalVotes) * 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Vote className="h-5 w-5 text-red-500" />
              <span className="font-semibold text-white">{t('culturalPoll')}</span>
            </div>
            <span className="text-xs text-zinc-500">{t('thisWeek')}</span>
          </div>

          {/* Question */}
          <h3 className="text-xl font-bold text-white mb-6">{poll.question}</h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {poll.options.map((option) => {
              const percentage = getPercentage(option.votes);
              const isSelected = selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => !hasVoted && setSelectedOption(option.id)}
                  disabled={hasVoted}
                  className={`w-full relative p-4 rounded-xl border transition-all ${
                    hasVoted
                      ? 'border-zinc-700 bg-zinc-800/50'
                      : isSelected
                      ? 'border-red-600 bg-red-600/10'
                      : 'border-zinc-700 bg-zinc-800/50 hover:border-zinc-600'
                  }`}
                >
                  {/* Progress bar (shown after voting) */}
                  {hasVoted && (
                    <div
                      className="absolute inset-0 rounded-xl bg-red-600/10 transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  )}

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isSelected && !hasVoted && (
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                      {hasVoted && isSelected && (
                        <CheckCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span className={`text-sm ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                        {option.text}
                      </span>
                    </div>
                    {hasVoted && (
                      <span className="text-sm font-medium text-zinc-400">{percentage}%</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Vote Button */}
          {!hasVoted ? (
            <Button
              onClick={handleVote}
              disabled={!selectedOption}
              className="w-full"
            >
              {t('voteNow')}
            </Button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <Users className="h-4 w-4" />
              {poll.totalVotes.toLocaleString()} votes
            </div>
          )}

          {/* Previous Winner */}
          {poll.previousWinner && (
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                {t('previousWinners')}
              </div>
              <p className="text-sm text-zinc-300">
                {poll.previousWinner.text}{' '}
                <span className="text-yellow-500">({poll.previousWinner.percentage}%)</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
