let IS_JEST = false;

try {
    IS_JEST = process.env.JEST_WORKER_ID !== undefined;
} catch {}

export { IS_JEST };
