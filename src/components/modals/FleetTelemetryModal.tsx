import React, { useState } from 'react';
import { TELEMETRY_FLEET } from '../../data/mockData';

interface FleetTelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FleetTelemetryModal: React.FC<FleetTelemetryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTruck, setSelectedTruck] = useState(TELEMETRY_FLEET[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <h3 className="text-[18px] font-bold">전국 특수 초저온 탱크로리 실시간 IoT 관제 시스템</h3>
              <p className="text-[12px] text-[#81cfff]">National Logistics Fleet Telemetry & Cryogenic Safety Monitoring</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Live KPI Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#111111] text-white border-b border-white/10 shrink-0">
          <div className="p-2 border-r border-white/10">
            <span className="text-[11px] text-[#81cfff] block font-semibold">정시 공급 이행률</span>
            <span className="text-[20px] font-extrabold text-[#FDD000]">99.98%</span>
          </div>
          <div className="p-2 border-r border-white/10">
            <span className="text-[11px] text-[#81cfff] block font-semibold">가동 중 특수 탱크로리</span>
            <span className="text-[20px] font-extrabold text-white">42대 가동</span>
          </div>
          <div className="p-2 border-r border-white/10">
            <span className="text-[11px] text-[#81cfff] block font-semibold">IoT 센서 통신 상태</span>
            <span className="text-[20px] font-extrabold text-emerald-400">정상 (100%)</span>
          </div>
          <div className="p-2">
            <span className="text-[11px] text-[#81cfff] block font-semibold">긴급 상황 관제</span>
            <span className="text-[20px] font-extrabold text-white">무사고 운행 중</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Active Fleet Selector */}
          <div className="space-y-2">
            <h4 className="text-[13px] font-bold text-[#071d2c] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#003d5d]">local_shipping</span>
              <span>현재 실시간 운행 중인 대표 초저온 로리 선택</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {TELEMETRY_FLEET.map((truck) => (
                <button
                  key={truck.id}
                  onClick={() => setSelectedTruck(truck)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    selectedTruck.id === truck.id
                      ? 'border-[#003d5d] bg-[#E0F4FC] ring-2 ring-[#003d5d]'
                      : 'border-[#D5E2EA] hover:bg-[#F4F8FA]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[13px] text-[#071d2c]">{truck.plateNumber}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        truck.status === '운행 중'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {truck.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#005580] font-medium truncate">{truck.cargo}</p>
                  <p className="text-[11px] text-[#41474e] truncate">목적지: {truck.destination}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Truck Live Telemetry Display */}
          <div className="p-6 rounded-2xl bg-[#F4F8FA] border border-[#D5E2EA] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D5E2EA]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#003d5d] text-white text-[12px] font-bold">
                    {selectedTruck.id}
                  </span>
                  <h4 className="text-[20px] font-extrabold text-[#071d2c]">
                    {selectedTruck.plateNumber}
                  </h4>
                  <span className="text-[13px] text-[#41474e]">담당 운전원: {selectedTruck.driver}</span>
                </div>
                <p className="text-[13px] text-[#005580] font-semibold mt-1">
                  적재물: {selectedTruck.cargo}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#41474e] block">도착 예정 시간 (ETA)</span>
                <span className="text-[16px] font-extrabold text-emerald-700">
                  {selectedTruck.eta}
                </span>
              </div>
            </div>

            {/* Gauges & Sensors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#D5E2EA] shadow-sm">
                <span className="text-[11px] text-[#41474e] font-semibold block mb-1">
                  초저온 탱크 온도
                </span>
                <span className="text-[24px] font-extrabold text-[#003d5d]">
                  {selectedTruck.tankTemperature}°C
                </span>
                <span className="text-[10px] text-emerald-600 block mt-1 font-medium">
                  진공 단열 정상
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D5E2EA] shadow-sm">
                <span className="text-[11px] text-[#41474e] font-semibold block mb-1">
                  내부 압력 게이지
                </span>
                <span className="text-[24px] font-extrabold text-[#003d5d]">
                  {selectedTruck.tankPressure} bar
                </span>
                <span className="text-[10px] text-emerald-600 block mt-1 font-medium">
                  안전 허용 압력 이내
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D5E2EA] shadow-sm">
                <span className="text-[11px] text-[#41474e] font-semibold block mb-1">
                  잔여 적재 충전율
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[24px] font-extrabold text-[#003d5d]">
                    {selectedTruck.fillLevelPercent}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-200 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${selectedTruck.fillLevelPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D5E2EA] shadow-sm">
                <span className="text-[11px] text-[#41474e] font-semibold block mb-1">
                  주행 속도
                </span>
                <span className="text-[24px] font-extrabold text-[#003d5d]">
                  {selectedTruck.speedKmH} km/h
                </span>
                <span className="text-[10px] text-emerald-600 block mt-1 font-medium">
                  GPS 정밀 관제 중
                </span>
              </div>
            </div>

            {/* Route Timeline */}
            <div className="p-4 rounded-xl bg-white border border-[#D5E2EA] space-y-3">
              <span className="text-[12px] font-bold text-[#071d2c] block">
                실시간 이송 경로 추적
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#003d5d]"></span>
                  <div>
                    <span className="text-[11px] text-[#41474e] block">출발지</span>
                    <strong className="text-[#071d2c]">{selectedTruck.departure}</strong>
                  </div>
                </div>
                <div className="flex-1 hidden sm:flex items-center px-4">
                  <div className="w-full h-0.5 bg-[#81cfff] relative">
                    <span className="material-symbols-outlined text-[18px] text-[#003d5d] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                      local_shipping
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div>
                    <span className="text-[11px] text-[#41474e] block">목적지 납품처</span>
                    <strong className="text-[#071d2c]">{selectedTruck.destination}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>차량 위치 및 압력 이상 시 본사 안전관제센터로 즉각 자동 경보(Fail-safe) 발송</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#D5E2EA] bg-white text-[#071d2c] hover:bg-gray-100 font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
