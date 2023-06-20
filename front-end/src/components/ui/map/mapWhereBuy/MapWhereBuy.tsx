import {
	Clusterer,
	FullscreenControl,
	Map,
	Placemark,
	RouteButton,
	SearchControl,
	TypeSelector,
	YMaps,
	ZoomControl
} from '@pbe/react-yandex-maps'

import styles from '../Map.module.scss'

const MapsWhereBuy = () => {
	const MAP_DEFAULT_STATE = {
		center: [55.751574, 37.573856],
		zoom: 5
	}

	const points = [
		[55.751574, 37.573856],
		[55.751574, 37.573856],
		[55.651574, 37.773856]
	]

	return (
		<div className={styles.map}>
			<YMaps
				query={{
					lang: 'ru_RU',
					apikey: `15bf4fa9-9b68-4caa-a2dc-62ecf8625228`
				}}
			>
				<Map
					defaultState={{
						center: [55.670991, 37.304258],
						zoom: 11,
						controls: []
					}}
					width={'95%'}
					height={'500px'}
				>
					<FullscreenControl />
					<RouteButton options={{ float: 'right' }} />
					<SearchControl options={{ float: 'right' }} />
					<TypeSelector options={{ float: 'right' }} />
					<ZoomControl options={{ float: 'right' }} />

					<Clusterer>
						{points.map((item, idx) => (
							<Placemark
								geometry={item}
								key={idx}
								properties={{
									balloonContentBody:
										'балун <strong>метки ' + idx + '</strong>',
									clusterCaption: 'метка <strong>' + idx + '</strong>'
								}}
								onClick={() => console.log(item)}
							/>
						))}
					</Clusterer>
				</Map>
			</YMaps>
		</div>
	)
}

export default MapsWhereBuy
