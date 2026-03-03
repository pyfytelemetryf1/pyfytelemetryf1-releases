# PyFyTelemetryF1 - Releases

#### PyFy Telemetry - F1 Performance Analysis Tool ####
Copyright (c) 2026 @pyfytelemetryf1 and its author.

---

## Summary

The `PyFy Telemetry - F1 Performance Analysis Tool` is a real-time, ultra-low latency UDP telemetry proxy designed for sim racers. It currently supports F1 25 (by Electronic Arts Inc./Codemasters).

`PyFy Telemetry F1` currently has two primary goals/ use-cases:

1. **Telemetry capture & output**: Collect lap-level and turn-level telemetry data in CSV files for offline sim racing performance analysis. Optionally (recommended), capture raw binary telemetry data that can be replayed, plotted, and analyzed later.

2. **Performance analysis & Growth insights**: Provide relevant telemetry that helps users analyze their performance and find actionable insights that helps them improve their racing technique, find more lap time, and progress (e.g. raise the AI difficulty level they are able to compete on, or for beginner/intermediate racers - remove assists gradually).

A *secondary use case* is described below, but it is currently not actively developed:

   3. **Real-time Wheel dash patching**: Intercept and enhance telemetry before forwarding to the sim racing software to cover currently unsupported scenarios e.g. for wheel dashes (e.g. replace fuel display with a calculated gap-behind time).


## Compatibility

Distribution is currently supported only for Windows (amd64), as this reflects the primary platform used in sim racing setups.

## How to get it

### Option 1: Microsoft Store (recommended)

Install directly from the **Microsoft Store** — search for `PyFy Telemetry - F1 Performance Analysis` or use the Store link provided in the latest release notes.

The Store handles installation, updates, and cleanup automatically.

### Option 2: Standalone ZIP installer

Download the latest `.zip` archive from the **[Releases page](https://github.com/pyfytelemetryf1/pyfytelemetryf1-releases/releases)**.

Once downloaded on Windows, right-click and mark the archive "Unlocked", then Extract the archive, and run `install.cmd`.

### How to verify the release ZIP integrity

A `.sha256` file is published alongside each release archive on the GitHub Releases page.
To verify the integrity of the downloaded `.zip` file, run:

    certutil -hashfile PyFyTelemetryF1-<VERSION>-win64.zip SHA256

Compare the output to the contents of the `.sha256` file.

## What the application does

- Receives real-time telemetry from your F1 game via UDP
- Forwards telemetry to your sim racing software (e.g., Simagic SimPro Manager)
- Captures raw telemetry data for later replay and analysis
- Generates per-lap and per-turn CSV files for offline performance analysis
- Provides telemetry charts, performance analysis, and growth insights
- Uses a bundled Python runtime — does not modify or require a system-level Python installation
- No internet connection required, no Administrator or elevated privileges required to install or run the application, no system changes, no usage metrics or data of any kind is collected or transmitted, no auto-updater — all data stays local

## Privacy

This application does not collect, transmit, or share any personal data. All data remains entirely local on your machine. See [PRIVACY.md](PRIVACY.md) for details.

## License

This project is provided for personal use for hobbyist telemetry analysis purposes only. It is distributed under the terms described in `LICENSE.md`.
Please read the license before installing or using this software. Third-party runtime dependency licenses are included in the installation under `licenses/third_party_licenses/`.

Always ensure compatibility with your system before installation. Always backup relevant data before and after installation.

**IMPORTANT** F1 25 is a trademark of Electronic Arts. This project or its author(s) are not affiliated with or endorsed by Electronic Arts, Codemasters, Formula One World Championship Limited, Liberty Media Corporation (including its Liberty Formula One Group tracking stock group), Simagic, or other software/hardware manufacturers (more details in `LICENSE.md`).
