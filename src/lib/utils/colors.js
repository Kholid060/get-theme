import textColor from './textColor';
import borderColor from './borderColor';
import backgroundColor from './backgroundColor';

export default function (colors, plugin) {
	backgroundColor(colors, plugin);
	borderColor(colors, plugin);
	textColor(colors, plugin);
};