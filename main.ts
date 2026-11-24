// weirdest-job-title entry (Node 22, standard library only): writes a
// single job title, 60 characters at most and nothing else, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 60 characters,
// and the blind judge compares it two at a time against other titles.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The title: a real-sounding tech-era job with one gloriously specific
// twist — someone whose whole career is apologising on behalf of cars
// that drive themselves. 39 characters, nothing else.
//
// Why this title: "Senior" gives it the familiar corporate-ladder frame
// (a real job, with a promotion path), "Apologizer" is the absurd role,
// and "for Self-Driving Cars" is the one hilariously specific twist —
// the cars cause the trouble, a human takes the blame.
const TITLE = 'Senior Apologizer for Self-Driving Cars';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TITLE, 'utf8');
