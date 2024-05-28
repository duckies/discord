import {
  ApplicationCommandOptionBase,
  type ApplicationCommandOptionAPIBase,
} from "../application-command-option";
import {
  ApplicationCommandOptionType,
  type ApplicationCommandOptionWithAutocomplete,
  type ApplicationCommandOptionWithChoices,
  type ApplicationCommandOptionWithMinMaxValues,
  type ApplicationCommandOptionWithRequired,
} from "../../types";
import { applyMixins } from "../../utils/mixins";
import { ApplicationCommandOptionAutocompleteMixin } from "./mixins/application-command-option-autocomplete-mixin";
import { ApplicationCommandOptionChoicesMixin } from "./mixins/application-command-option-choices-mixin";
import { ApplicationCommandOptionMinMaxMixin } from "./mixins/application-command-option-minmax-mixin";
import { ApplicationCommandOptionRequiredMixin } from "./mixins/application-command-option-required-mixin";

export interface ApplicationCommandIntegerOptionAPI<R extends boolean | undefined = undefined>
  extends ApplicationCommandOptionAPIBase<ApplicationCommandOptionType.Integer>,
    ApplicationCommandOptionWithRequired<R>,
    ApplicationCommandOptionWithChoices<number>,
    ApplicationCommandOptionWithAutocomplete,
    ApplicationCommandOptionWithMinMaxValues {
  type: ApplicationCommandOptionType.Integer;
}

export interface ApplicationCommandIntegerOptionOptions<R extends boolean | undefined = undefined>
  extends Omit<ApplicationCommandIntegerOptionAPI<R>, "type"> {}

export interface ApplicationCommandIntegerOption<R extends boolean>
  extends ApplicationCommandOptionRequiredMixin<R>,
    ApplicationCommandOptionChoicesMixin<"number">,
    ApplicationCommandOptionAutocompleteMixin,
    ApplicationCommandOptionMinMaxMixin {}

export class ApplicationCommandIntegerOption<R extends boolean = false> extends ApplicationCommandOptionBase<ApplicationCommandOptionType.Integer> {
  public readonly required?: R
  public readonly autocomplete?: boolean;
  
  constructor({
    name,
    description,
    ...options
  }: ApplicationCommandIntegerOptionOptions<R>) {
    super({
      type: ApplicationCommandOptionType.Integer,
      name,
      description,
    });

    Object.assign(this, options);
  }
}

applyMixins(ApplicationCommandIntegerOption, [
  ApplicationCommandOptionRequiredMixin,
  ApplicationCommandOptionChoicesMixin,
  ApplicationCommandOptionAutocompleteMixin,
  ApplicationCommandOptionMinMaxMixin,
]);