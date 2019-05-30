// Represents a swing, or steal, or whatever other result happened
export interface Result {
  play_number: number;
  inning: String;
  outs: number;
  brc: number;
  play_tyoe: String;
  pitcher: String;
  pitch_number: number;
  hitter: String;
  swing_number: String;
  catcher: String;
  throw_number: number;
  runner: String;
  steal_number: number;
  result: String;
  run_scored: number;
  ghost_scored: number;
  rbis: number;
  stolen_base: number;
  diff: number;
  run_scored_on_play: number;
  offensive_team: String;
  defensive_team: String;
  game_number: number;
  session_number: number;
  inning_identifier: number;
  pitcher_id: number;
  hitter_id: number;
  catcher_id: number;
  runner_id: number;
}
