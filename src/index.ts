import { Logger } from "@golem-sdk/golem-js";
import * as pino from "pino";
import * as pinoPretty from "pino-pretty";

class GolemPinoLogger implements Logger {
  private logger: pino.Logger;

  constructor(
    private options?: pino.LoggerOptions,
    child?: pino.Logger,
    private namespace?: string,
  ) {
    this.logger = child || pino.pino(this.options);
  }

  debug(msg: string): void;
  debug(msg: string, ctx?: Record<string, unknown> | Error) {
    this.logger.debug(ctx, msg);
  }

  info(msg: string): void;
  info(msg: string, ctx?: Record<string, unknown> | Error) {
    this.logger.info(ctx, msg);
  }

  warn(msg: string): void;
  warn(msg: string, ctx?: Record<string, unknown> | Error) {
    this.logger.warn(ctx, msg);
  }

  error(msg: string): void;
  error(msg: string, ctx?: Record<string, unknown> | Error) {
    this.logger.error(ctx, msg);
  }

  child(namespace: string): GolemPinoLogger {
    const fullNamespace = this.namespace
      ? `${this.namespace}:${namespace}`
      : namespace;
    return new GolemPinoLogger(
      this.options,
      this.logger.child({ namespace: fullNamespace }),
      fullNamespace,
    );
  }
}

/**
 * Golem Logger interface implementation using the Pino library
 */
export function pinoLogger(options?: pino.LoggerOptions): Logger {
  return new GolemPinoLogger(options);
}

/**
 * Golem Logger interface implementation using the Pino-Pretty library
 */
export function pinoPrettyLogger(
  options?: pino.LoggerOptions,
  prettyOptions?: pinoPretty.PrettyOptions,
): Logger {
  return new GolemPinoLogger({
    ...options,
    transport: {
      target: "pino-pretty",
      options: {
        ignore: "pid,hostname,namespace",
        singleLine: true,
        ...prettyOptions,
      },
    },
  });
}
