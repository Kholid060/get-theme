import textColor from './textColor';
import borderColor from './borderColor';
import backgroundColor from './backgroundColor';

export default function (colors, plugin) {
	backgroundColor(colors, plugin, true);
	borderColor(colors, plugin, true);
	textColor(colors, plugin, true);
};