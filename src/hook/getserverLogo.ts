import {
	AcaneLogo,
	AuroraLogo,
	BeraLogo,
	CroaLogo,
	EliShimLogo,
	InosisLogo,
	LibuteLogo,
	LunaLogo,
	NovaLogo,
	RedLogo,
	SkaniaLogo,
	UnionLogo,
	ZenisLogo,
} from '../images'

export const getServerLogo = (serverName?: string) => {
	switch (serverName) {
		case '노바':
			return NovaLogo

		case '레드':
			return RedLogo

		case '루나':
			return LunaLogo

		case '리부트':
			return LibuteLogo

		case '베라':
			return BeraLogo

		case '스카니아':
			return SkaniaLogo

		case '아케인':
			return AcaneLogo

		case '엘리시움':
			return EliShimLogo

		case '오로라':
			return AuroraLogo

		case '유니온':
			return UnionLogo

		case '이노시스':
			return InosisLogo

		case '제니스':
			return ZenisLogo

		case '크로아':
			return CroaLogo

		case undefined:
			return undefined
	}
}
