// Lightweight sound effects via Web Audio API (no external assets)
// Provides short UI sounds: pack opening, confetti pop, and click.

class SFX {
  private ctx: AudioContext | null = null;

  private getContext() {
    if (this.ctx) return this.ctx;
    const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AudioCtx) return null;
    this.ctx = new AudioCtx();
    return this.ctx;
  }

  private ensureStart() {
    const ctx = this.getContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      // Resume context on first user gesture
      ctx.resume().catch(() => {});
    }
  }

  private playTone({ duration = 0.15, frequency = 440, type = "sine", gain = 0.08 }: { duration?: number; frequency?: number; type?: OscillatorType; gain?: number; }) {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);

    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(g).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  private playNoise({ duration = 0.25, gain = 0.05, color = "white" as "white" | "pink" } = {}) {
    const ctx = this.getContext();
    if (!ctx) return;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // White or simple pink noise
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = color === "pink" ? (lastOut + 0.02 * white) / 1.02 : white;
      if (color === "pink") lastOut = data[i];
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const g = ctx.createGain();
    g.gain.value = gain;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 4000;

    noise.connect(filter).connect(g).connect(ctx.destination);

    const now = ctx.currentTime;
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    noise.start(now);
    noise.stop(now + duration + 0.02);
  }

  private async playFromPublic(baseName: string, volume = 0.6): Promise<boolean> {
    try {
      const exts = ["mp3", "wav", "ogg"];
      for (const ext of exts) {
        const url = `/audios/${baseName}.${ext}`;
        const audio = new Audio(url);
        audio.volume = volume;
        try {
          await audio.play();
          return true;
        } catch {
          // try next extension
        }
      }
    } catch {
      // ignore failures and fall back to synthesized audio
    }
    return false;
  }

  // Public APIs
  packOpen() {
    this.ensureStart();
    (async () => {
      const ok = await this.playFromPublic("pack-open", 0.8);
      if (ok) return;
      // Fallback to synthesized effect
      this.playTone({ frequency: 740, duration: 0.08, type: "triangle" });
      setTimeout(() => this.playTone({ frequency: 520, duration: 0.1, type: "triangle" }), 70);
    })();
  }

  confetti() {
    this.ensureStart();
    (async () => {
      const ok = (await this.playFromPublic("achievement", 0.8)) || (await this.playFromPublic("confetti", 0.8));
      if (ok) return;
      // Fallback to synthesized effect
      this.playNoise({ duration: 0.2, gain: 0.06, color: "pink" });
      setTimeout(() => this.playTone({ frequency: 1200, duration: 0.07, type: "square" }), 30);
    })();
  }

  click() {
    this.ensureStart();
    (async () => {
      const ok = await this.playFromPublic("click", 0.6);
      if (ok) return;
      this.playTone({ frequency: 320, duration: 0.05, type: "square" });
    })();
  }

  pageFlip() {
    this.ensureStart();
    (async () => {
      const ok = await this.playFromPublic("page-flip", 0.5);
      if (ok) return;
      // Fallback to synthesized page flip sound
      this.playNoise({ duration: 0.15, gain: 0.04, color: "white" });
      setTimeout(() => this.playTone({ frequency: 180, duration: 0.08, type: "triangle", gain: 0.05 }), 20);
    })();
  }
}

export const sfx = new SFX();
