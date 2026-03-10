/**
 * Scenario metadata for the demo walkthrough.
 *
 * Each scenario has:
 *   id        - matches the tab data-scenario attribute
 *   title     - scenario display name
 *   slides[]  - ordered array of slide objects:
 *     image       - path to image (relative to demo/)
 *     title       - caption title
 *     description - caption description text
 *     group       - optional group tag (e.g., "OVERVIEW", "TECHNIQUE")
 *     disclaimer  - optional disclaimer text (for LLM slides)
 *     placeholder - if true, shows a placeholder instead of an image
 *     markdown    - if set, renders markdown content instead of an image
 */

const LLM_DISCLAIMER = 'LLM analysis is performed by a third-party service of your choice. ' +
    'No data leaves your machine unless you choose to upload it. ' +
    'The LLM service is not included in this application \u2014 their terms of service apply.';

const SCENARIOS = [
    {
        id: 'highlights',
        title: 'Chart Highlights',
        slides: [
            {
                image: 'images/highlights/track_map_melbourne.png',
                title: 'Full Track Map \u2014 Speed Heatmap',
                description: 'Your racing line colored by speed. See braking zones, apex speeds, and acceleration points at a glance.',
                group: 'TRACK MAP'
            },
            {
                image: 'images/highlights/lap_times_progression.png',
                title: 'Lap Times Progression',
                description: 'Compare clean lap times across sessions. Outlier laps are automatically detected and annotated.',
                group: 'OVERVIEW'
            },
            {
                image: 'images/highlights/turn_time_delta.png',
                title: 'Turn Time Delta \u2014 Time Left on Table',
                description: 'Sorted by impact: see exactly where you gained or lost time between two races.',
                group: 'COMPARISON'
            },
            {
                image: 'images/highlights/standing_start.png',
                title: 'Standing Start Analysis',
                description: 'Reaction time, traction, throttle application, and wheel spin \u2014 compared across race starts.',
                group: 'RACE START'
            },
            {
                image: 'images/highlights/scorecard.png',
                title: 'Session Scorecard',
                description: 'At-a-glance session summary: difficulty, assists, technique metrics, and consistency scores.',
                group: 'SCORECARD'
            },
            {
                image: 'images/highlights/braking_consistency.png',
                title: 'Braking Consistency',
                description: 'Compare braking points across turns between sessions. Find where you\'re inconsistent.',
                group: 'COMPARISON'
            },
            {
                image: 'images/highlights/racing_line.png',
                title: 'Turn Racing Line Overlay',
                description: 'Every lap\'s racing line overlaid \u2014 see how consistent your line is through each corner.',
                group: 'RACING LINES'
            },
            {
                image: 'images/highlights/fastest_lap_telemetry.png',
                title: 'Fastest Lap Telemetry \u2014 Full Dashboard',
                description: 'Brake, throttle, steering, speed, downforce, and gear traces for your fastest lap with turn zones highlighted.',
                group: 'TELEMETRY'
            },
            {
                image: 'images/highlights/brake_traces_gear.png',
                title: 'Brake Traces & Gear Overlay',
                description: 'Per-turn brake application with gear selection \u2014 see your braking consistency lap by lap.',
                group: 'TECHNIQUE'
            },
            {
                image: 'images/highlights/tyre_degradation.png',
                title: 'Tyre Wear & Degradation',
                description: 'Track tyre wear across stints. Plan your strategy with data.',
                group: 'STRATEGY'
            },
            {
                image: 'images/highlights/lap_times_per_stint.png',
                title: 'Lap Times Per Stint',
                description: 'See pace evolution within each tyre stint. Spot degradation and outlier laps.',
                group: 'STRATEGY'
            },
            {
                image: 'images/highlights/llm_report.png',
                title: 'LLM Performance Report (Optional)',
                description: 'Export your session data to your preferred LLM for deep performance analysis and actionable coaching insights.',
                group: 'LLM ANALYSIS',
                disclaimer: LLM_DISCLAIMER
            }
        ]
    },
    {
        id: 'full-reel',
        title: 'Full Analysis Reel',
        slides: [
            // Overview
            { image: 'images/full-reel/01_overview_lap_times_progression.png', title: 'Clean Lap Times Comparison', description: 'Lap-by-lap comparison of clean times across two race sessions, with median lines and outlier annotations.', group: 'OVERVIEW' },
            { image: 'images/full-reel/02_overview_lap_times_per_stint_race1.png', title: 'Lap Times Per Stint \u2014 Race 1', description: 'Pace evolution within each tyre stint for the first race session.', group: 'OVERVIEW' },
            { image: 'images/full-reel/03_overview_lap_times_per_stint_race2.png', title: 'Lap Times Per Stint \u2014 Race 2', description: 'Pace evolution within each tyre stint for the second race session.', group: 'OVERVIEW' },
            { image: 'images/full-reel/04_overview_lap_times_vs_tyre_age.png', title: 'Lap Times vs Tyre Age', description: 'How lap times evolve with tyre wear. Detect degradation cliffs and optimal stint lengths.', group: 'OVERVIEW' },
            { image: 'images/full-reel/05_comparison_fuel_normalized_pace.png', title: 'Fuel-Normalized Pace', description: 'True pace comparison with fuel weight effects removed.', group: 'OVERVIEW' },
            // Race Start
            { image: 'images/full-reel/06_start_standing_start_analysis.png', title: 'Standing Start Analysis', description: 'Reaction time, speed build-up, traction, throttle modulation, and wheel spin compared between two race starts.', group: 'RACE START' },
            // Turn Analysis
            { image: 'images/full-reel/07_turns_time_left_on_table_race1.png', title: 'Time Left on Table \u2014 Race 1', description: 'Per-turn time variance: the gap between your best and median performance. Sorted by potential gain.', group: 'TURN ANALYSIS' },
            { image: 'images/full-reel/08_turns_time_left_on_table_race2.png', title: 'Time Left on Table \u2014 Race 2', description: 'Per-turn time variance for the second race session.', group: 'TURN ANALYSIS' },
            { image: 'images/full-reel/09_comparison_turn_time_delta.png', title: 'Turn Time Delta', description: 'Sorted by impact: where you gained or lost the most time between the two races.', group: 'TURN ANALYSIS' },
            { image: 'images/full-reel/10_comparison_braking_consistency.png', title: 'Braking Consistency Comparison', description: 'Braking point variance per turn across both sessions. Lower spread means more consistent braking.', group: 'TURN ANALYSIS' },
            { image: 'images/full-reel/11_comparison_throttle_consistency.png', title: 'Throttle Consistency Comparison', description: 'Throttle application point variance per turn across both sessions.', group: 'TURN ANALYSIS' },
            // Scorecard
            { image: 'images/full-reel/12_experimental_scorecard.png', title: 'Session Scorecard', description: 'At-a-glance session summary: difficulty, assists, progression, technique, and consistency metrics.', group: 'SCORECARD' },
            // Racing Lines
            { image: 'images/full-reel/13_lines_T1_racing_line_race1.png', title: 'Racing Line \u2014 T1 (Race 1)', description: 'Every lap\'s line through Turn 1 overlaid. Colors distinguish individual laps.', group: 'RACING LINES' },
            { image: 'images/full-reel/14_lines_T1_racing_line_race2.png', title: 'Racing Line \u2014 T1 (Race 2)', description: 'Turn 1 racing lines from the second session for comparison.', group: 'RACING LINES' },
            { image: 'images/full-reel/15_lines_T16_racing_line_race1.png', title: 'Racing Line \u2014 T16 (Race 1)', description: 'Line consistency through the final corner complex.', group: 'RACING LINES' },
            { image: 'images/full-reel/16_lines_T16_racing_line_race2.png', title: 'Racing Line \u2014 T16 (Race 2)', description: 'Final corner lines from the second session.', group: 'RACING LINES' },
            { image: 'images/full-reel/17_lines_T9_racing_line_race1.png', title: 'Racing Line \u2014 T9 (Race 1)', description: 'Mid-circuit racing line overlay for Turn 9.', group: 'RACING LINES' },
            { image: 'images/full-reel/18_lines_T9_racing_line_race2.png', title: 'Racing Line \u2014 T9 (Race 2)', description: 'Turn 9 lines from the second session.', group: 'RACING LINES' },
            { image: 'images/full-reel/19_lines_T5_racing_line_race1.png', title: 'Racing Line \u2014 T5 (Race 1)', description: 'Racing line consistency through Turn 5.', group: 'RACING LINES' },
            { image: 'images/full-reel/20_lines_T5_racing_line_race2.png', title: 'Racing Line \u2014 T5 (Race 2)', description: 'Turn 5 lines from the second session.', group: 'RACING LINES' },
            { image: 'images/full-reel/21_lines_T6_T7_racing_line_race1.png', title: 'Racing Line \u2014 T6+T7 (Race 1)', description: 'Connected corner complex \u2014 line consistency through the T6-T7 chicane.', group: 'RACING LINES' },
            { image: 'images/full-reel/22_lines_T6_T7_racing_line_race2.png', title: 'Racing Line \u2014 T6+T7 (Race 2)', description: 'T6-T7 chicane lines from the second session.', group: 'RACING LINES' },
            // Technique — T1
            { image: 'images/full-reel/23_technique_T1_brake_traces_gear_overlay_race1.png', title: 'T1 Brake Traces & Gear \u2014 Race 1', description: 'Brake pressure and gear selection through Turn 1 across all laps.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/24_technique_T1_brake_traces_gear_overlay_race2.png', title: 'T1 Brake Traces & Gear \u2014 Race 2', description: 'Turn 1 braking comparison for the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/25_technique_T1_throttle_traces_race1.png', title: 'T1 Throttle Traces \u2014 Race 1', description: 'Throttle application through Turn 1 across all laps.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/26_technique_T1_throttle_traces_race2.png', title: 'T1 Throttle Traces \u2014 Race 2', description: 'Turn 1 throttle for the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/27_technique_T1_speed_traces_race1.png', title: 'T1 Speed Traces \u2014 Race 1', description: 'Speed profile through Turn 1 across all laps. See minimum apex speed consistency.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/28_technique_T1_speed_traces_race2.png', title: 'T1 Speed Traces \u2014 Race 2', description: 'Turn 1 speed profiles from the second session.', group: 'TECHNIQUE' },
            // Technique — T16
            { image: 'images/full-reel/29_technique_T16_brake_traces_gear_overlay_race1.png', title: 'T16 Brake Traces & Gear \u2014 Race 1', description: 'Brake and gear analysis for the final corner.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/30_technique_T16_brake_traces_gear_overlay_race2.png', title: 'T16 Brake Traces & Gear \u2014 Race 2', description: 'Final corner braking from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/31_technique_T16_throttle_traces_race1.png', title: 'T16 Throttle Traces \u2014 Race 1', description: 'Throttle application through the final corner.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/32_technique_T16_throttle_traces_race2.png', title: 'T16 Throttle Traces \u2014 Race 2', description: 'Final corner throttle from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/33_technique_T16_speed_traces_race1.png', title: 'T16 Speed Traces \u2014 Race 1', description: 'Speed through the final corner complex.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/34_technique_T16_speed_traces_race2.png', title: 'T16 Speed Traces \u2014 Race 2', description: 'Final corner speeds from the second session.', group: 'TECHNIQUE' },
            // Technique — T9
            { image: 'images/full-reel/35_technique_T9_brake_traces_gear_overlay_race1.png', title: 'T9 Brake Traces & Gear \u2014 Race 1', description: 'Brake and gear analysis for Turn 9.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/36_technique_T9_brake_traces_gear_overlay_race2.png', title: 'T9 Brake Traces & Gear \u2014 Race 2', description: 'Turn 9 braking from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/37_technique_T9_throttle_traces_race1.png', title: 'T9 Throttle Traces \u2014 Race 1', description: 'Throttle application through Turn 9.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/38_technique_T9_throttle_traces_race2.png', title: 'T9 Throttle Traces \u2014 Race 2', description: 'Turn 9 throttle from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/39_technique_T9_speed_traces_race1.png', title: 'T9 Speed Traces \u2014 Race 1', description: 'Speed profile through Turn 9.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/40_technique_T9_speed_traces_race2.png', title: 'T9 Speed Traces \u2014 Race 2', description: 'Turn 9 speeds from the second session.', group: 'TECHNIQUE' },
            // Technique — T5
            { image: 'images/full-reel/41_technique_T5_brake_traces_gear_overlay_race1.png', title: 'T5 Brake Traces & Gear \u2014 Race 1', description: 'Brake and gear analysis for Turn 5.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/42_technique_T5_brake_traces_gear_overlay_race2.png', title: 'T5 Brake Traces & Gear \u2014 Race 2', description: 'Turn 5 braking from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/43_technique_T5_throttle_traces_race1.png', title: 'T5 Throttle Traces \u2014 Race 1', description: 'Throttle through Turn 5.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/44_technique_T5_throttle_traces_race2.png', title: 'T5 Throttle Traces \u2014 Race 2', description: 'Turn 5 throttle from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/45_technique_T5_speed_traces_race1.png', title: 'T5 Speed Traces \u2014 Race 1', description: 'Speed profile through Turn 5.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/46_technique_T5_speed_traces_race2.png', title: 'T5 Speed Traces \u2014 Race 2', description: 'Turn 5 speeds from the second session.', group: 'TECHNIQUE' },
            // Technique — T6+T7
            { image: 'images/full-reel/47_technique_T6_T7_brake_traces_gear_overlay_race1.png', title: 'T6+T7 Brake Traces & Gear \u2014 Race 1', description: 'Brake and gear through the chicane complex.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/48_technique_T6_T7_brake_traces_gear_overlay_race2.png', title: 'T6+T7 Brake Traces & Gear \u2014 Race 2', description: 'Chicane braking from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/49_technique_T6_T7_throttle_traces_race1.png', title: 'T6+T7 Throttle Traces \u2014 Race 1', description: 'Throttle through the chicane complex.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/50_technique_T6_T7_throttle_traces_race2.png', title: 'T6+T7 Throttle Traces \u2014 Race 2', description: 'Chicane throttle from the second session.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/51_technique_T6_T7_speed_traces_race1.png', title: 'T6+T7 Speed Traces \u2014 Race 1', description: 'Speed through the chicane complex.', group: 'TECHNIQUE' },
            { image: 'images/full-reel/52_technique_T6_T7_speed_traces_race2.png', title: 'T6+T7 Speed Traces \u2014 Race 2', description: 'Chicane speeds from the second session.', group: 'TECHNIQUE' },
            // Energy
            { image: 'images/full-reel/53_energy_ers_deployment_pattern_race1.png', title: 'ERS Deployment Pattern \u2014 Race 1', description: 'Energy recovery and deployment across the lap. Optimize your ERS strategy.', group: 'ENERGY' },
            { image: 'images/full-reel/54_energy_ers_deployment_pattern_race2.png', title: 'ERS Deployment Pattern \u2014 Race 2', description: 'ERS usage from the second session.', group: 'ENERGY' },
            { image: 'images/full-reel/55_energy_battery_lifecycle_race1.png', title: 'Battery Lifecycle \u2014 Race 1', description: 'Battery charge level throughout the race. See charge/discharge cycles.', group: 'ENERGY' },
            { image: 'images/full-reel/56_energy_battery_lifecycle_race2.png', title: 'Battery Lifecycle \u2014 Race 2', description: 'Battery patterns from the second session.', group: 'ENERGY' },
            // Tyre Management
            { image: 'images/full-reel/57_overview_tyre_management_race1.png', title: 'Tyre Management \u2014 Race 1', description: 'Tyre wear, temperature, and degradation tracking across stints.', group: 'TYRE MANAGEMENT' },
            { image: 'images/full-reel/58_overview_tyre_management_race2.png', title: 'Tyre Management \u2014 Race 2', description: 'Tyre management from the second session.', group: 'TYRE MANAGEMENT' },
            // Outliers
            { image: 'images/full-reel/59_overview_excluded_lap_times.png', title: 'Excluded Laps \u2014 Outlier Detection', description: 'Automatically detected outlier laps with annotations showing the cause (incidents, cut corners, etc.).', group: 'OVERVIEW' },
            // Fastest Lap Telemetry
            { image: 'images/full-reel/60_overview_fastest_lap_telemetry_race1.png', title: 'Fastest Lap Telemetry \u2014 Race 1', description: 'Full 6-panel telemetry dashboard for your fastest lap: brake, throttle, steering, speed, downforce, and gear with turn zones.', group: 'TELEMETRY' },
            { image: 'images/full-reel/61_overview_fastest_lap_telemetry_race2.png', title: 'Fastest Lap Telemetry \u2014 Race 2', description: 'Fastest lap telemetry dashboard from the second session.', group: 'TELEMETRY' }
        ]
    },
    {
        id: 'llm',
        title: 'LLM Reports',
        slides: [
            {
                placeholder: true,
                title: 'LLM Analysis Reports',
                description: 'Deep performance analysis generated by your preferred LLM. Coming soon.',
                group: 'LLM ANALYSIS',
                disclaimer: LLM_DISCLAIMER
            }
        ]
    },
    {
        id: 'install',
        title: 'Installation Guide',
        slides: [
            {
                placeholder: true,
                title: 'Microsoft Store \u2014 Get the App',
                description: 'Search for "PyFy Telemetry" in the Microsoft Store, or use the direct link. Click Install \u2014 it\'s free.',
                group: 'STEP 1'
            },
            {
                placeholder: true,
                title: 'First Launch',
                description: 'After installation, launch from the Start Menu. The first-run setup walks you through configuration.',
                group: 'STEP 2'
            },
            {
                placeholder: true,
                title: 'Configure F1 25 \u2014 UDP Telemetry Settings',
                description: 'In F1 25, go to Settings \u2192 Telemetry. Set the UDP output to 127.0.0.1 with the port shown in the app.',
                group: 'STEP 3'
            },
            {
                placeholder: true,
                title: 'Configure SimPro Manager',
                description: 'If you use a SimPro Manager (e.g., Simagic), set the forwarding port to match the app\'s listening port.',
                group: 'STEP 4'
            }
        ]
    },
    {
        id: 'capture',
        title: 'Capture & Analyze',
        slides: [
            {
                image: 'images/capture/cli_menu.png',
                title: 'Main Menu',
                description: 'Launch the app and you\'re ready. The status bar shows listening status and recording state.',
                group: 'STEP 1'
            },
            {
                placeholder: true,
                title: 'Live Capture',
                description: 'Start your F1 25 session. Telemetry flows automatically \u2014 the app captures everything in the background.',
                group: 'STEP 2'
            },
            {
                placeholder: true,
                title: 'Session Complete',
                description: 'After your session, return to the app. CSVs and raw capture files are saved automatically.',
                group: 'STEP 3'
            },
            {
                placeholder: true,
                title: 'Generate Analysis Charts',
                description: 'Select "Generate analysis charts" from the menu. Choose your session(s) and the app generates a full analysis reel.',
                group: 'STEP 4'
            },
            {
                placeholder: true,
                title: 'Browse Your Data',
                description: 'Open the telemetry_logs folder to find your CSVs, charts, scorecards, and raw captures.',
                group: 'STEP 5'
            }
        ]
    }
];
